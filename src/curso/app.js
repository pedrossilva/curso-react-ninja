import React, { Component } from 'react'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false,
      radioValue: null,
      selectValue: '3',
      textareaValue: 'textarea\nvalue',
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({showContent: this.state.checked})
              })
            }}
          /> Mostrar conteúdo
        </label>

        {this.state.showContent && <div>Olha eu aqui!</div>}
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <form
  //         onSubmit={e => {
  //           e.preventDefault()
  //           console.log('event', e)
  //         }}
  //         onChange={e => {
  //           console.log('name', e.target.name)
  //           console.log('value', e.target.value)
  //         }}
  //       >
  //         <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
  //
  //         <hr/>
  //
  //         <label>
  //           <input type="checkbox"
  //                  checked={this.state.checked}
  //                  onChange={e => this.setState({checked: !this.state.checked})} />
  //           Checkbox [{this.state.checked ? 'true' : 'false'}]
  //         </label>
  //
  //         <hr/>
  //
  //         <label>
  //           <input type="radio" name="rd" value="1"
  //                  checked={this.state.radioValue == '1'}
  //                  onChange={e => this.setState({radioValue: e.target.value})} /> Radio 1
  //         </label>
  //         <label>
  //           <input type="radio" name="rd" value="2"
  //                  checked={this.state.radioValue == '2'}
  //                  onChange={e => this.setState({radioValue: e.target.value})} /> Radio 2
  //         </label>
  //         [{this.state.radioValue}]
  //
  //         <hr/>
  //
  //         <select value={this.state.selectValue} onChange={e => this.setState({selectValue: e.target.value})}>
  //           <option value="1">Opção 1</option>
  //           <option value="2">Opção 2</option>
  //           <option value="3">Opção 3</option>
  //         </select>
  //
  //         <hr/>
  //         <textarea name="textarea" value={this.state.textareaValue} onChange={e => this.setState({textareaValue: e.target.value})} />
  //
  //         <button type="submit">Enviar</button>
  //
  //       </form>
  //
  //       <hr/>
  //       <pre>{JSON.stringify(this.state, null, 2)}</pre>
  //     </div>
  //   )
  // }
}
