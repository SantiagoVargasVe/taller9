import React from 'react'
import ReactDom from 'react-dom'

import {Jobs} from './components/Jobs'
import Form from './components/Form'

ReactDom.render(<div><Form/> <Jobs/></div>,document.getElementById('root'))