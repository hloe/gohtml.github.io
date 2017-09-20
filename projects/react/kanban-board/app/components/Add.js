import React from 'react';


class Add extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    return(
      <div>
        <div className='row'>
          <div className='col-12 col-sm-6 offset-sm-6 col-md-3 offset-md-9'>
            <button className='btn btn-outline-primary btn-lg btn-block'>Add</button>
          </div>
        </div>

        <div className='row hidden-xs-up'>
          <form 
            className='col-12 col-sm-10 offset-sm-2 col-md-4 offset-md-8 form-group'
            onSubmit={this.handleSubmit}
          >
            <ul>
              <li>
                <label className='text-muted'>Describe your task
                  <input type='text' className='form-control' placeholder='task' />
                </label>
              </li>
              <li>
                <label className='text-muted'>Priority
                  <select name='priority' className='form-control'>
                    <option value='low'>low</option>
                    <option value='normal'>normal</option>
                    <option value='high'>high</option>
                  </select>
                </label>
              </li>
              <li className='form-buttons'>
                <input type='submit' className='btn btn-primary' value='Add' />
                <button className='btn btn-secondary'>Cancel</button>      
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;