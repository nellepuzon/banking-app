import React from 'react';

function Table() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Balance</th>
      </tr>
      <tr>
        <td>
          <a className='eg' href='#'>
            Malunes, Eglecerio
          </a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 11,297
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Puzon, Junelle</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 53,928
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Go, Francis</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 53,928
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Turingan, Joshua</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 90,287
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Reza Jhay Lacanlale</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 34,387
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Alphonzo Escolar</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 23,989
        </td>
      </tr>
      <tr>
        <td>
          <a href='#'>Spike Vinz Cruz</a>
        </td>
        <td>
          <i className='fa-solid fa-peso-sign'></i> 43,237
        </td>
      </tr>
    </table>
  );
}

export default Table;
