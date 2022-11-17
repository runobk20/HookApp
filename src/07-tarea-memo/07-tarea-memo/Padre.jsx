import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
      (num) => {
        setValor(actVal => actVal + num)
      },
      [],
    )

    return (
        <div className='container mx-auto my-4 p-4'>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
