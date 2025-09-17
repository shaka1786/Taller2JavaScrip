import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Punto1_Bloquest } from './Punto1_Bloques'
import { Punto2_TemplateStrings } from './Punto2_TemplateStrings'
import { Punto3_Operador } from './Punto3_Operador'
import { Punto4_Desestructuracion } from './Punto4_Desestructuracion'
import { Punto5_SpreadRest } from './Punto5_SpreadRest'
import { Punto6_Array_methods } from './Punto6_Array_methods'
import { Punto7_Ordenamiento } from './Punto7_Ordenamiento'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Punto1_Bloquest/>
    <Punto2_TemplateStrings/>
    <Punto3_Operador/>
    <Punto4_Desestructuracion/>
    <Punto5_SpreadRest/>
    <Punto6_Array_methods/>
    <Punto7_Ordenamiento/>
    
  </StrictMode>,
)
