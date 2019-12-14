import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl, faPen,faAt, faMobileAlt,faGlobeAsia,
    faCity,faStreetView,faHome,faUserMd,faUsers } from '@fortawesome/free-solid-svg-icons'
import '../css/Sidebar+main.css';
import '../css/ER.css';
import '../css/mainB.css';

const ER = () => {
    return (
        <React.Fragment>
           {/* <form class="main" id="ER">
           <table>
                <tr>
                    <td>Code :</td>
                    <td><input type="text" name="Code" id="Code" /></td>
                    <td>Country :</td>
                    <td><input type="text" name="Country" id="Country" /></td>
                </tr>
                <tr>
                    <td>Employee Name :</td>
                    <td><input type="text" name="EmployeeName" id="EmployeeName" /></td>
                    <td>City :</td>
                    <td><input type="text" name="City" id="City" /></td>
                </tr>
                <tr>
                    <td>ID Type :</td>
                    <td><select>
                        <option name="IDType" id="IDType" value=""></option>
                        </select></td>
                    <td>Region :</td>
                    <td><input type="text" name="Region" id="Region" /></td>
                </tr>
                <tr>
                    <td>ID Number :</td>
                    <td><input type="text" name="IDNumber" id="IDNumber" /></td>
                    <td>Postal Code :</td>
                    <td><input type="text" name="PostalCode" id="PostalCode" /></td>
                </tr>
                <tr>
                    <td>Phone :</td>
                    <td><input type="text" name="Phone" id="Phone" /></td>
                    <td>Adress Line 1 :</td>
                    <td><input type="text" name="AdressLine1" id="AdressLine1" /></td>
                </tr>
                <tr>
                    <td>Mobile :</td>
                    <td><input type="text" name="Mobile" id="Mobile" /></td>
                    <td>Adress Line 2 :</td>
                    <td><input type="text" name="AdressLine2" id="AdressLine2" /></td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td><input type="text" name="Email" id="Email" /></td>
                    <td>Language :</td>
                    <td><select>
                        <option name="Language" id="Language" value=""></option>
                        </select></td>
                </tr>
                <tr>
                    <td>Note :</td>
                    <td><textarea rows="4" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td>Job :</td>
                    <td><select>
                        <option name="Job" id="Job" value=""></option>
                        </select></td>
                    <td>Upload Photo :</td>
                    <td><input type="file" name="UploadPhoto" id="UploadPhoto" /></td>
                </tr>
                <tr>
                    <td>Employee Status :</td>
                    <td><select>
                        <option name="EmployeeStatus" id="EmployeeStatus" value=""></option>
                        </select></td>
                    <td><img src="https://i.ibb.co/DMCn29T/profile.jpg" alt="profile" width="50" height="50"/></td>
                </tr>
            </table>
            <button type="submit" className="mainB" form="ER" value="New">New</button>                
            <button type="submit" className="mainB" form="ER" value="Save">Save</button>                
</form> */}
                
<div class="container">
  <form>
    <div class="row">
        <div class="col-half">
            <h4>Personal Information</h4>
            <div class="input-group input-group-icon">
                <input type="text" placeholder="Code"/>
                <div class="input-icon"><FontAwesomeIcon icon={faListOl} /></div>
            </div>
            <div class="input-group input-group-icon">
            <input type="text" placeholder="Full Name"/>
                <div class="input-icon"><FontAwesomeIcon icon={faPen} /></div>
            </div>
            <div class="input-group input-group-icon">
            <input type="email" placeholder="Email"/>
                <div class="input-icon"><FontAwesomeIcon icon={faAt} /></div>
            </div>
            <div class="input-group input-group-icon">
                <input type="number" placeholder="Mobile"/>
                <div class="input-icon"><FontAwesomeIcon icon={faMobileAlt} /></div>
            </div>
        </div>
        <div class="col-half">
            <h4>Adresses</h4>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="County"/>
                    <div class="input-icon"><FontAwesomeIcon icon={faGlobeAsia} /></div>
                </div>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="City"/>
                    <div class="input-icon"><FontAwesomeIcon icon={faCity} /></div>
                </div>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="Region"/>
                    <div class="input-icon"><FontAwesomeIcon icon={faStreetView} /></div>
                </div>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="Adress Line"/>
                    <div class="input-icon"><FontAwesomeIcon icon={faHome} /></div>
                </div>
        </div>
     </div>
    <div class="row">
      <div class="col-half">
        <h4>Date of Birth</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" placeholder="DD"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="MM"/>
          </div>
          <div class="col-third">
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div class="col-half">
        <h4>Gender</h4>
        <div class="input-group">
          <input type="radio" name="gender" value="male" id="gender-male"/>
          <label for="gender-male">Male</label>
          <input type="radio" name="gender" value="female" id="gender-female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-half">
            <h4>CV</h4>
            <div class="input-group input-group-icon">
                <input type="text" placeholder="Job"/>
                <div class="input-icon"><FontAwesomeIcon icon={faUserMd} /></div>
                </div>
            <div class="input-group">
                <select>
                    <option>Employed</option>
                    <option>Unemployed</option>
                </select>
            </div>
        </div>
        <div class="col-half">
            <h4>Photo</h4>
            <div class="input-group input-group-icon">
                <input type="file" placeholder="Card CVC"/>
                <div class="input-icon"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
        </div>
    </div><hr/>
    <div class="row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input type="checkbox" id="terms"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>
      <div class="row">
        <div class="input-group">
            <button type="submit" className="mainB" form="ER" value="New">New</button>                
            <button type="submit" className="mainB" form="ER" value="Save">Save</button>                
        </div>
      </div>
  </form>
</div>
        </React.Fragment>
    );
};

export default ER;