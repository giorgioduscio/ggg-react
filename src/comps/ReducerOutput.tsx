export default function ReducerOutput({formState, formKeys}) {
  return (<>
    <table>
      <caption>Campi dinamici</caption>
      <colgroup>
        <col span={2} style={{background: "gray"}}/>
      </colgroup>

      <thead>
        <tr>{formKeys.map((fieldName:string)=>{
          return <th key={fieldName}>{fieldName}</th>
        })}</tr>
      </thead>
      
      <tbody>
        <tr>{formKeys.map((fieldName:string)=>{
          return <td key={fieldName}>
            {formState[fieldName]}
            </td> 
        })}</tr>
      </tbody>
    </table>
  </>)
}
