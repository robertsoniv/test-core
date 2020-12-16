import { Component, h } from '@stencil/core';

@Component({
  tag: 'another-component',
  styleUrl: 'another-component.css',
  shadow: true,
})
export class AnotherComponent {

  render() {
    return (
      <div>Another Component Example!</div>
    );
  }

}
