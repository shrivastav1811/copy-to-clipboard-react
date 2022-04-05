import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Toaster, toast } from 'react-hot-toast';

const Copyelement = ({data, setData}) => {
  return (
    <div>
        <h3 className='data'>{data}</h3>
        <CopyToClipboard text={data}>
          <button className="btn"
           onClick={()=> toast("text copied", {position: "top-right"})}
           style={{textAlign: "center", cursor: "pointer"}}
           >
          Copy Text
          </button>
        </CopyToClipboard>

          <button className="btn btn-clear"
           onClick={()=> setData("")}
           style={{textAlign: "center", cursor: "pointer"}}
           >
          Clear
          </button>
          <Toaster/>
    </div>
  )
}

export default Copyelement