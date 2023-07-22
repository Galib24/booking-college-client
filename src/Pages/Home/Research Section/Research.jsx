import React from 'react';
import useResearch from '../../../hooks/useResearch';
import { Link } from 'react-router-dom';

const Research = () => {
    const [allPaper] = useResearch();
    // console.log(allPaper);
    return (
        <>
            <h1 className='text-center font-bold text-4xl my-12'>The Research Paper Section</h1>

            
                
                    <div className="overflow-x-auto mb-12">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Title</th>
                          <th>Author(s)</th>
                          <th>Year</th>
                          <th>URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            allPaper?.map((paper, i)=>    <tr 
                            key={paper._id}
                            className="bg-base-200">
                            <th>{i+1}</th>
                            <td>{paper.title}</td>
                            <td>{paper.author}</td>
                            <td>{paper.year}</td>
                            <td><Link to={paper.url}>Link</Link> </td>
                          </tr>
                       )
                        }
                     
                       
                      </tbody>
                    </table>
                  </div>

                  
                
            

        </>
    );
};

export default Research;