function Spreadsheet({ records, columns, primaryKey, children, onColumnSelect, onRecordSelect }) {
  return (
    <section className="spreadsheet">
      <header className="spreadsheet-header">
        <ul className="spreadsheet-columns">
          {columns.map(column => (
            <li
              key={column.property}
              className="spreadsheet-column"
              onClick={onColumnSelect}
              children={null} />
          ))}
        </ul>
      </header>

      <div className="spreadsheet-content">
        <ul className="spreadsheet-records">
          {records.map(record => (
            <li
              key={record[primaryKey]}
              className="spreadsheet-record"
              onClick={onRecordSelect}>
              {columns.map(column => (
                <span
                  key={column.property}
                  className="spreadsheet-record-property"
                  children={children(record, column)} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
