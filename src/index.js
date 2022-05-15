import React from 'react';
import {createRoot} from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';
import 'animate.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GifExpertApp />);


