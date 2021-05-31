import { makeStyles, Paper } from "@material-ui/core";
import MaterialTable, { MTableBodyRow, MTableToolbar } from "material-table";
import tableIcons from "./TableIcons";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  search: {
    "& .MuiInputBase-root": {
      paddingLeft: "8px",
    },
    "& .MuiInputBase-input": {
      padding: "12px 12px 12px 0",
    },
    "& .MuiToolbar-root": {
      paddingLeft: 0,
    },
  },
  tableContainer: {
    padding: `0 ${theme.spacing(0)}px`,
    [theme.breakpoints.up("sm")]: {
      padding: `0 ${theme.spacing(1)}px`,
    },
  },
}));

const TableComponent = ({
  columns,
  data,
  actions = [],
  options,
  searchPlaceholder,
  containerProps,
  loading,
  ...rest
}) => {
  const classes = useStyles();
  var bc = "#5F2EEA";
  var cc = "#ffffff";
  return (
    <div>
      {loading && <LinearProgress />}
      <MaterialTable
        icons={tableIcons}
        columns={columns.map((c) => ({
          ...c,
          tableData: undefined,
        }))}
        data={data}
        actions={actions}
        options={{
          headerStyle: {
            backgroundColor: bc,
            color: cc,
          },
          debounceInterval: 500,
          sorting: false,
          showTitle: false,
          pageSize: 10,
          pageSizeOptions: [10, 20, 30],
          actionsColumnIndex: -1,
          searchFieldVariant: "outlined",
          searchFieldAlignment: "left",
          columnsButton: true,
          ...options,
        }}
        localization={{
          toolbar: {
            searchPlaceholder: searchPlaceholder,
            nRowsSelected: "{0} R(s)",
          },
        }}
        components={{
          Container: (props) => (
            <Paper
              {...props}
              elevation={6}
              className={classes.tableContainer}
              {...containerProps}
            />
          ),
          Toolbar: (props) => (
            <div className={classes.search}>
              <MTableToolbar {...props} />
            </div>
          ),
          Row: (props) => {
            const propsCopy = { ...props };
            // or add a format action function
            // formatAction(originAction, propsCopy.data) => finalAction;
            propsCopy.actions = propsCopy.actions.map((action) => {
              if (typeof action === "function") {
                return action;
              }
              return {
                ...action,
                disabled:
                  action.disabled || action.disabledFunc?.(propsCopy.data),
                hidden: action.hidden || action.disabledFunc?.(propsCopy.data),
              };
            });
            return <MTableBodyRow {...propsCopy} />;
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default TableComponent;
