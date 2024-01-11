/* eslint-disable unused-imports */
'use client'
import { ChangeEvent, useState, useEffect } from "react"
import { Person } from "@/classes/person/Person";
import { PersonHatDecorator } from "@/classes/person/personDecorators/PersonHatDecorator";
import { PersonShirtDecorator } from "@/classes/person/personDecorators/PersonShirtDecorator";
import { PersonPantsDecorator } from "@/classes/person/personDecorators/PersonPantsDecorator";
import Highlight from 'react-highlight'


const PersonComponent = () => {
  const [personInstance, setPerson] = useState<Person | null>(null);
  const [code, setCode] = useState(`
let person = new Person({ name: 'Pessoa' });

//person = new PersonHatDecorator().dress(person);
//person = new PersonShirtDecorator().dress(person);
//person = new PersonPantsDecorator().dress(person);

setPerson(person);
`)

  useEffect(() => {
    runCode();
  }, [code])

  const runCode = () => {
    const context = {
      Person,
      PersonHatDecorator,
      PersonShirtDecorator,
      PersonPantsDecorator,
      setPerson
    } as any

    const keys = Object.keys(context);
    const values = keys.map(key => context[key]);

    try {
      const evalFunction = new Function(...keys, code);
      evalFunction(...values);
    } catch(err) {
    }
  }

  const changeCode = (event: ChangeEvent<HTMLTextAreaElement> ) => {
    const new_code = event.target.value;
    setCode(new_code);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 h-1/2 absolute code-container">
        <Highlight className="language-javascript">{ code }</Highlight>
        <textarea
          value={code}
          onChange={changeCode}
          cols={50} 
          rows={10}
          className="absolute top-0 left-0 bg-transparent p-2 font-mono text-transparent caret-white resize-none"
        ></textarea>
      </div>
      <div className="bg-white w-1/4 h-3/4 absolute right-96 flex items-center rounded-md">
        { personInstance && <img className="w-100" src={ personInstance.img } /> }

        { personInstance?.accessories.map((accessory) => {
          return <img key={accessory.name} src={ accessory.url } className={ `acessory ${accessory.name}` } />
        }) }
      </div>
    </div>
  );
}

export default PersonComponent;