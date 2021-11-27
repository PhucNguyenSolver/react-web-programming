export function Input(props){
    return (
        <div className="form-floating mb-3">
            <input type={props.type} className="form-control" id={props.fieldName} name={props.fieldName}
            placeholder={props.fieldName} title={props.title}
            style={props.style}
            required/>
            <label for={props.fieldName}>{props.vnFieldName}</label>
        </div>
    )
}