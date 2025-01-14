import React from 'react';
import { useState, useRef } from 'react';
const Bba = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const textRefs = useRef([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const results = [];
        textRefs.current.forEach((ref, index) => {
            if (ref && ref.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push(index);
            }
        });
        setSearchResults(results);
        if (results.length > 0) {
            scrollToResult(results[0]);
        }
    };

    const scrollToResult = (index) => {
        const element = textRefs.current[index];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const highlightText = (text, index) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) => {
            const key = `${index}-${i}`;
            return regex.test(part) ? (
                <span
                    key={key}
                    ref={(el) => textRefs.current[index] = el}
                    style={{ backgroundColor: 'red' }}
                >
                    {part}
                </span>
            ) : (
                part
            );
        });
    };




    const downloadPdf = (fileName) => {
        const link = document.createElement('a');
        link.href = `/new/${fileName}`;;
        link.download = fileName;
        link.click();
    };

    return (
        <>
            <div className="heading" >
                <h3> Welcome to the <strong style={{ color: "yellow" }}>Bachelor of Business Administration</strong> . Our curriculum is divided into 8 semesters. You can download the course data and syllabus for each semester below:</h3>
                <div className="search input-group animated fadeIn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2 " onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 1</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Financial Accounting', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Financial Management', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Organizational Behaviour', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Business Law', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 2</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Marketing', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Digital Marketing', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Business Analytics', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Operational Research', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 3</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 4</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 5</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 6</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 7</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="computer-science-page" >
                <div className="container-fluid" style={{ padding: '20px' }}>
                    <h2 className="page-title">Semester 8</h2>

                    <div className="table-container">
                        <div className="scrollable-table">
                            <table className="animated-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}><i className="fas fa-book" style={{ marginRight: '8px' }}></i>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Programming Fundamental', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Information Communication Technology', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas I', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Functional English', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Pak Studies', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>{highlightText('Calculas II', 0)}</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download PDF
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
          




        </>
    );
};

export default Bba;
