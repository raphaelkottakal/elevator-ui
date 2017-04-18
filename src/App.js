import React, { Component } from 'react';
import { TweenLite } from 'gsap';
import { Link, Element, scroller,Events, scrollSpy } from 'react-scroll';
import Zero from './components/Zero';
import One from './components/One';
import Two from './components/Two';
import Controller from './components/Controller';

class App extends Component {

  constructor() {
    super();
    this.state = {
    	entered: false,
      floor: 0,
      liftLoaded: false,
      open: false,
    }
  }


  componentDidMount() {
  	window.onload = () => {
  		console.log('loaded');
  		this.setState({
  			liftLoaded: true
  		});
  		// document.body.scrollTop = document.documentElement.scrollTop = 0;
  		console.log(this.refs.body.scrollTop);
  		this.refs.body.scrollTop = 100;
  	}

  	Events.scrollEvent.register('end', (to, element) => {
      this.setState({
      	canScroll: false,
      	open: false
      });
      this.openDoor();
    });

    this.refs.body.addEventListener('touchmove', (e) => {
		  e.preventDefault();
		}, false);
    this.refs.overlay.addEventListener('touchmove', (e) => {
		  e.preventDefault();
		}, false);

 
    scrollSpy.update();
  }

  gotoFloor(floor) {
  	this.setState({
  		open: false,
  		floor: parseInt(floor, 10)
  	});
  	this.refs.overlay.addEventListener('touchstart', (e) => {
	  e.preventDefault();
	}, false);


	const screenTenPercent = screen.availHeight * 0.08
	console.log(screenTenPercent);

  	this.closeDoor(() => {
  		scroller.scrollTo(floor, {
	  		duration: 2000,
	  		smooth: true,
	  		offset: - screenTenPercent
	  	});
  	});
  }

  openDoor() {
  	TweenLite.to(this.refs.leftDoor, 1, { x: '-100%' });
    TweenLite.to(this.refs.rightDoor, 1, { x: '100%', onComplete: () => {
	  	this.refs.overlay.removeEventListener('touchstart', false);
	    this.setState({
	      open: true
	    });
    }});
  }

  closeDoor(onComplete) {
  	TweenLite.to(this.refs.leftDoor, 1, { x: '0%' });
    TweenLite.to(this.refs.rightDoor, 1, { x: '0%', onComplete });
  }

  handelClick() {
  	if (!this.state.entered) {
  		this.openDoor();
  		this.setState({
  			entered: true
  		});
  	}    

  }

  render() {

    const css = {
      overlay: {
        position: 'fixed',
        top: '8%',
        left: 0,
        width: '100%',
        height: '100%',
        // background: (this.state.open) ? 'none' : 'black'
        zIndex: (this.state.open) ? 0 : 9999
      },
      door: {
      	pointerEvents: (this.state.open) ? 'none' : 'all',
      },
      frame: {
        display: 'block',
        position: 'relative',
        zIndex: 9999,
      },
      leftDoor: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        zIndex: 99,
        opacity: 0.9
      },
      rightDoor: {
        // display:'none',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        zIndex: 99,
        opacity: 0.9

      },
      body: {
      	position: 'absolute',
        top: '8%',
        left: 0,
        width: '100%',
        height: '90%',
      	// overflowY: (this.state.canScroll) ? 'initial' : 'hidden',
      	// marginTop: '18%',
      },
      loading: {
      	top: 0,
      	left: 0,
      	position: 'fixed',
      	width: '100%',
      	height: '100%',
      	backgroundColor: 'hsla(0,0%,0%,1)',
      	display: 'flex',
      	justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontSize: 32,
		textTransform: 'uppercase',
		letterSpacing: 3,
		zIndex: 99999
      }
    }

    return (
      <div>
	      <div style={css.overlay} ref="overlay">
	        <div style={css.door} onClick={this.handelClick.bind(this)}>
	        <img
	          ref="leftDoor"
	          style={css.leftDoor}
	          alt="left door"
	          src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525341547-DoorLeft.jpg"
	        />
	        <img
	          ref="rightDoor"
	          style={css.rightDoor}
	          alt="right door"
	          src="http://assets.myntassets.com/assets/images/lookbook/elevat2017/4/18/11492525341517-DoorRight.jpg"
	        />
	        </div>
	      </div>
        <div ref="body" style={css.body}>
	        <Element name="0">
	      	  <Zero />
	        </Element>
	        <Element name="1">
	        	<One />
	        </Element>
	        <Element name="2">
	      	  <Two />
	        </Element>
	        <Element name="3">
	      	  <Zero />
	        </Element>
	        <Element name="4">
	      	  <One />
	        </Element>
        </div>
        <Controller
        	floor={this.state.floor}
    		gotoFloor={this.gotoFloor.bind(this)}
    	/>
        {(this.state.liftLoaded) ? '' : <div style={css.loading}>Loading&hellip;</div>}
      </div>
    );
  }
}

export default App;
