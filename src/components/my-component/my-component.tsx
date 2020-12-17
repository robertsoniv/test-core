import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      <h1>My name is {this.getText()}!</h1>
      {this.getText() ? (
        <table>
        <tbody>
          {this.first && (
            <tr>
              <th>First Name</th>
              <td>{this.first || 'N/A'}</td>
            </tr>
          )}
          {this.middle && (
          <tr>
            <th>Middle Name</th>
            <td>{this.middle || 'N/A'}</td>
          </tr>
          )}
          {this.last && (
          <tr>
            <th>Last Name</th>
            <td>{this.last || 'N/A'}</td>
          </tr>
          )}
        </tbody>
      </table>
      ) : null}      
    </div>;
  }
}
