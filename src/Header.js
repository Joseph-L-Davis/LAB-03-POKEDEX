import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const variants = {
  animate: {
    x: [180, -1435],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear',
      },
    },
  },
};
export default class Header extends Component {
  render() {
    return (

      <header className="Header">
        <motion.div
          className='track'
          variants={variants}
          animate='animate'
        >
          <h1>Joe's Incredibly Bland Pokedex</h1>

        </motion.div>
      </header>


    );
  }

}