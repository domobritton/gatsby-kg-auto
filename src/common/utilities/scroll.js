import { Component } from 'react'

export default class Scroll extends Component {
    state = {
        isVisible: false
    }
   componentDidMount() {
       window.addEventListener('scroll', this.handleVisible);
   } 

   handleVisible = () => {
       let y = window.scrollY;
       const el = document.getElementById('animate');
       let s = el.offsetTop;
       let h = el.offsetHeight;
       let distance = (s - y - h);
       if (distance < 100) {
           this.setState({ isVisible: true });
       } else {
           this.setState({ isVisible: false });
       }
   }

   componentWillUnmount() {
       window.removeEventListener('scroll', this.handleVisible);
   }
  render() {
      const { children } = this.props;
    return children({
       isVisible: this.state.isVisible 
    })
  }
}
