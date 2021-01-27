import React from 'react';
import './App.css';
import Form from './Form';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export default class App extends React.Component {
  openPopupbox() {
    const content = <Form />;
    PopupboxManager.open({
      content,
      config: { fadeIn: true, fadeInSpeed: 800 },
    });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <button className='checklist-btn' onClick={this.openPopupbox}>
          Show Checklist
        </button>
        <PopupboxContainer />
        <Footer />
      </div>
    );
  }
}
