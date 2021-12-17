const Input = ((props) => {
  let element = null;
  switch(props.type) {
    case 'text':
      element = (
        <div>
          <label htmlFor={ props.name } >{ props.label } </label>
          <input type={ props.type } name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChangeHandler }/>
          { props.errors  && <div> { props.errors.join()} </div> }
        </div>
      );
      break;
    case 'select':
      element = (
        <div>
          <label htmlFor={ props.name } >{ props.label } </label>
          <select name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChangeHandler }>
            { props.options.map(function(option, index){
              return <option value={option[0]} key={index}> {option[1]} </option>
            })}
          </select>
          { props.errors  &&
            <div> { props.errors.join() } </div>
          }
        </div> 
      );
      break;
      case 'textarea':
        element = (
          <div>
            <label htmlFor={ props.name } >{ props.label } </label> <br />
            <textarea rows = { props.rows } cols={ props.cols } name={ props.name } id={ props.name } value={ props.value } onChange={ props.onChangeHandler }/>
            { props.errors  && <span> { props.errors.join() } </span> }
          </div>
        );
      break;
      case 'checkbox':
        element = (
          <div>
            <input type={ props.type } id={ props.name } name={ props.name } value={ props.value } onChange={ props.onChangeHandler }/>
            <label htmlFor={ props.name }><h5>{ props.label }</h5></label>
            { props.errors  && <span> { props.errors.join() } </span> }
          </div>
        );
      break;
      case 'submit':
        element = (
          <div>
            <input type={ props.type } id={ props.name } name={ props.name } value={ props.value } onChange={ props.onChangeHandler }/>
            <label htmlFor={ props.name }><h5>{ props.label }</h5></label>
            { props.errors  && <span> { props.errors.join() } </span> }
          </div>
        );
      break;
  }
  return element;
});

export default Input;
