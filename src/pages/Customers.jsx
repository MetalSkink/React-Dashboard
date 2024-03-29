import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Edit, Sort, Filter, Page, Inject, Toolbar } from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from '../data/dummy';
import { Header } from "../components";

const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'> 
      <Header title="Customers" category="Page"/>
      <GridComponent id='gridcomp' dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} 
                     editSettings={{allowDeleting: true, allowEditing: true}} width="auto" >
        <ColumnsDirective> 
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers