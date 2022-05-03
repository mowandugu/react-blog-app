import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings () {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
           <span className="settingsTitleUpdate">Update Your Account</span>
           <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <div className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input type="file" style={{display: "none"}} id="fileInput" className="settingsPPInput"/>
            </div>
            <label >Username</label>
            <input type="text" placeholder="safak" name="name"/>
            <label >Email</label>
            <input type="email" placeholder="safak@gmail.com" name="email"/>
            <label >Password</label>
            <input type="password" placeholder="Password" name="password"/>
            <button className="settingsSubmitButton" type="submit">Update</button>
        </div>
      </div>
      <Sidebar/>
    </div>
  )
}