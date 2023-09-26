import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckMark from "../../assets/check-mark.png";
import { useDispatch, useSelector } from "react-redux";
import { selectedProperties } from "../../store/blogSlice/propertySlice";
import "./property-search-tool.css";

const PropertySearchTool = () => {
  const { properties, selected } = useSelector((state) => state.property);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [propertyData, setPropertyData] = useState(properties);
  const dispatch = useDispatch();

  const searchHandler = (value) => {
    let filteredData = propertyData.filter((item) => {
      if (item.address.includes(value)) {
        return item;
      }
    });

    if (!value) {
      return setPropertyData(properties);
    }
    setPropertyData(filteredData);
  };

  const handleTypeClick = (val) => {
    setActiveType(val);
    console.log(val);
    if (val === "all") {
      setPropertyData(properties);
    } else {
      setPropertyData(properties?.filter(({ type }) => type === val));
    }
  };

  return (
    <>
      <div className="text-center py-3 bg-secondary">
        <h3 className="text-white fw-bold">Property search tool</h3>
      </div>

      <div className="row container-fluid">
        <div
          className="col-sm-12 col-md-2 col-lg-2 d-flex flex-column justify-content-center mx-0"
          style={{ height: "80vh" }}
        >
          <h5 className="fw-bold">Property types</h5>

          <div>
            <nav className="nav flex-column text-capitalize">
              {["all", "flat", "terraced-house", "semi-detached"].map((val) => (
                <li
                  className={`nav-link text-dark cursor-pointer ${
                    val === activeType ? "active-nav" : ""
                  }`}
                  key={val}
                  onClick={() => handleTypeClick(val)}
                >
                  {val}
                </li>
              ))}
            </nav>
          </div>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-10">
          <div>
            <div className="mt-4">
              <h5 className="fw-bold mx-5">Search</h5>
              <div className="d-flex mx-5 gap-5">
                <input
                  onChange={(e) => {
                    searchHandler(e.target.value);
                    setSearchInputValue(e.target.value);
                  }}
                  type="text"
                  aria-label="Address"
                  className="form-control"
                  placeholder="Address"
                />
                <button type="button" className="btn btn-warning">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="fw-bold mx-5">Selected properties</h5>
              <div className="mx-5">
                <table className="table">
                  <thead>
                    <tr>
                      <TableHead hideIcon />
                    </tr>
                  </thead>
                  <tbody>
                    {selected?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.address}</td>
                          <td>{item.postCode}</td>
                          <td>{item.rooms}</td>
                          <td>{item.floorArea}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {selected.length === 0 && (
                <div className="text-center">
                  <h5>No Data Selected</h5>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h5 className="fw-bold mx-5">Selected results</h5>
              <div className="mx-5">
                <table className="table">
                  <thead>
                    <tr>
                      <TableHead />
                    </tr>
                  </thead>
                  <tbody>
                    {propertyData?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="text-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexCheckDefault"
                              onClick={() => {
                                dispatch(selectedProperties(item));
                              }}
                            />
                          </td>
                          <td>{item.address}</td>
                          <td>{item.postCode}</td>
                          <td>{item.rooms}</td>
                          <td>{item.floorArea}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySearchTool;

const TableHead = ({ hideIcon }) => {
  const head = [
    <img width={30} src={CheckMark} alt="check mark" />,
    "Address",
    "Postcode",
    "Number of rooms",
    <span>
      Floor area (m <sup>2</sup>)
    </span>,
  ];
  if (hideIcon) head.shift();
  return (
    <>
      {head.map((option) => (
        <th className="bg-secondary border-end" scope="col">
          {option}
        </th>
      ))}
    </>
  );
};
