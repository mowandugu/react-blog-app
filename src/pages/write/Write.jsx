import './write.css'

export default function Write () {
  return (
    <div className="write">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="writeImg"/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
           type="file" 
           style={{display: "none"}} 
           id="fileInput"
          />
          <input
           autoFocus={true} 
           placeholder="Title" 
           type="text" 
           className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
           placeholder="Tell your story" 
           autoFocus={true} 
           type="text" 
           className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}