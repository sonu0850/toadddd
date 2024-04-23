import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewSingleData = () => {
  const id = useParams(); // Get the Data from Url
  console.log("idddd", id.item);
  const singleData = useSelector((state) => state.authSlice.Data);
  console.log("single data user show", singleData);
  const SingleData = singleData.find((item, index) => index == id.item);
    const [Data, setData] = useState([SingleData]);

  // console.log("show single data", showSingleData);


  return (
    <>
      <div className="applicationform bg-black p-4 h-auto  ">
        <div className="form h-[900px]  w-[800px] bg-[#F5F5F5] m-auto rounded-md border-2 outline-44 outline-black p-6 font-cambaria ">
          <div className="left">
       
            <h1 className="text-center text-3xl bg-[#D3D3D5] px-3 py-1 m-auto ">
              INCOME TAX RULES, 1962
            </h1>
          </div>
          <div className="formno text-center mt-2">
            <h2 className=" font-bold">FORM NO. 15G</h2>
            <p>See Section 197A(I) Rule 29A</p>
            <p className=" font-bold">
              Dedration Under Section 197A(i) & Section <br /> made by and
              indvidual or a person (not being a Company or firm) claming
              certain <br /> income without deducation of tax
            </p>
          </div>
          <div className="userdata p-6">
            <table className="w-full ">
             {Data.length>0 ? Data.map((showSingleData,index)=>{
              return(
                <div >
                 <tr>
                <td colspan="2"> 1. First Name : {showSingleData.firstName}</td>
                <td> 2. Last Name :{showSingleData.lastName}</td>
              </tr>
              <tr>
                <td rowspan="2"> 3. Email :{showSingleData.email}</td>
                <td>4. Date of Birth :{showSingleData.dateOfBirth}</td>
                <td rowspan="2">5. Gender {showSingleData.gender}</td>
              </tr>
              <tr></tr>
              <tr>
                <td colspan="1">Adhaar Card No. {showSingleData.adhaarno}</td>
                <td >Pan No. {showSingleData.pan}</td>
                <td>Screen Size (inches)</td>
              </tr>
                </div>
              )
             }): "User Not Found"}
            </table>
          </div>
          <div className="declaratonform">
            <h1 className="text-center font-bold">DECLARATION/VERIFICATION </h1>
            <p className="text-justify px-4 mt-5">
              <br />
              1.I hereby &nbsp;&nbsp;{" "}
              <h3 className="inline underline decoration-4 font-extrabold">
                {/* {showSingleData.firstName} */}
              </h3>
              &nbsp; declare that the particulars given on pre-page/above are
              correct and complete in all respect of Financial Year 2022-23
              (Assessment Year 2023-24). 2.The self-attested documentary proof
              for claiming the benefits of various savings / investments already
              made or likely to be made, will besubmitted by 20th January 2023,
              failing which the tax may be recovered from me by nullifying the
              savings / investments stated in declarationform. 3.I hereby state
              that the claim of deduction shown above is in my name and if it is
              in joint account then it is declared herewith that the other
              claimant will not claim it in his/her ITR. 4.In case of payment/
              contribution/ investments, I will produce the original document
              for verification,whenever it will be asked for. Last date of
              submission of Declaration Form: 7th January, 2023 
          
            </p>
          </div>
          <div className="signatureplace flex justify-between items-center mt-10 px-7">
            <div className="left ">
              <h2>Place ..................</h2>
              Date <h2 className="inline underline decoration-1 font-bold"> {Data.map((item)=>item.date)}</h2>
            </div>
            <div className="right">
              <p>................</p>
              <h2>Signature</h2>
            </div>
          </div>

          <table className="w-full text-center p-4">
           
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewSingleData;
