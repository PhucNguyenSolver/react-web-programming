export function Input(props){
    return (
        <div className="form-floating mb-3">
            <input type={props.type} className="form-control" id={props.fieldName} name={props.fieldName}
            placeholder={props.fieldName} pattern={props.pattern}
            minlength={props.minlength} maxlength={props.maxlength} title={props.title}
            onChange={props.onChange}
            required/>
            <label for={props.fieldName}>{props.vnFieldName}</label>
        </div>
    )
}