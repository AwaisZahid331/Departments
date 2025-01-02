import React from 'react'

const Chemistry = () => {
    const downloadPdf = (fileName) => {
        const link = document.createElement('a');
        link.href = `/new/${fileName}`;;
        link.download = fileName;
        link.click();

    }
    return (
        <>
            <div className="heading" >
                <h3> Welcome to the <strong style={{ color: "yellow" }}>Chemistry Department</strong> . Our curriculum is divided into 8 semesters. You can download the course data and syllabus for each semester below:</h3>
                <div className="search input-group animated fadeIn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2">Search</button>
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Papers</th>
                                        <th className='text-center' style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Programming Fandamental 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Calculas 2023</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}> Islamic Studies 2022</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('ch2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 1
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>Functional English 2021</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 2.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 2
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 3.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 3
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '8px' }}>2020</td>
                                        <td style={{ padding: '8px' }}>
                                            <button onClick={() => downloadPdf('Chapter 4.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 4
                                            </button>
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '1px' }}>Information Communication Technology 2019</td>
                                        <td style={{ padding: '1px' }}>
                                            <button onClick={() => downloadPdf('Chapter 5.pdf')} style={{ padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                                Download Chapter 5
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

    )
}

export default Chemistry;
