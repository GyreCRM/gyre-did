import React, { useEffect, useState, useRef } from "react";
import Wrapper from "./Wrapper";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { DOMAIN } from "../utils/constant";
import { getTx } from "../apis/tx";
import { getDids } from "../apis/did";

export default function Dids() {
  const [dids, setDids] = useState([]);
  const buttonRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const response = await getDids();
        setDids(response);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  const publish = async (id) => {
    if (window.confirm("Are you sure you want to confirm?")) {
      try {
        buttonRef.current.disabled = true;
        const response = await axios({
          method: "put",
          url: `${DOMAIN}/dids/${id}/status`,
          headers: {
            accept: "application/json",
          },
          data: { status: "published" },
        });
        if (response.status === 201) {
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const reject = async (id) => {
    if (window.confirm("Are you sure you want to confirm?")) {
      try {
        buttonRef.current.disabled = true;
        const response = await axios({
          method: "put",
          url: `${DOMAIN}/dids/${id}/status`,
          headers: {
            accept: "application/json",
          },
          data: { status: "rejected" },
        });
        if (response.status === 201) {
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Student ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Edu Date</th>
              {/* <th scope="col">TON Scan</th> */}
              <th scope="col">Status</th>
              <th scope="col">Confirm</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
          <tbody>
            {dids.map((did) => {
              return (
                <tr key={did.id} style={{ verticalAlign: "middle" }}>
                  <td>{did.id}</td>
                  <td>{did.name}</td>
                  <td>{did.studentId}</td>
                  <td>{did.course}</td>
                  <td>{did.eduDate}</td>
                  <td>{did.status}</td>
                  <td>
                    {did.status === "issued" ? (
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => publish(did.id)}
                        ref={buttonRef}>
                        Confirm
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm disabled">
                        Confirm
                      </button>
                    )}
                  </td>
                  <td>
                    {did.status === "issued" ? (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => reject(did.id)}
                        ref={buttonRef}>
                        Reject
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm disabled">
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}
