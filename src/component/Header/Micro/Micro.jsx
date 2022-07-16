import React, { useState } from 'react'
import Style from './micro.style.module.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Redux/todoSlice';


function Micro() {
  const [state, setState] = useState(true);
  const [micro,setMicro] = useState(true);
  const dispatch = useDispatch();
  const { transcript } = useSpeechRecognition();
  return (
    <div className={state ? Style.micro : Style.active}
    onClick={() => {
          setState(prev => !prev)
          setMicro(micro=>!micro)
          
        }
    }
    onMouseDown={()=>{
       micro? SpeechRecognition.startListening({continues:true}):SpeechRecognition.stopListening()
       dispatch(addItem(transcript))
    }}
    >
      <i  class="fa-solid fa-microphone"></i>
    </div>
  )
}

export default Micro