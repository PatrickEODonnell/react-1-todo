import React, { Component } from "react";
import Pagination from "../components/pagination";
import TodosHeading from "../components/todosHeading";
import Table from "../common/table";
import StatusFilter from "../components/statusFilter";
import CompleteButton from "../components/completeButton";
import { paginate } from "../utils/paginate";
import { getToDos } from "../services/fakeToDoService";
import _ from "lodash";

class Todos extends Component {
  state = {
    todos: [],
    itemsPerPage: 5,
    currentPage: 1,
    statusFilter: "",
    sortColumn: { path: "description", order: "asc" }
  };
  componentDidMount() {
    this.setState({ todos: getToDos() });
  }

  handleComplete = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].status = "Complete";
    this.setState({ todos });
  };

  handleFilterChange = e => {
    const newStatusFilter = e.target.value;
    this.setState({ statusFilter: newStatusFilter });
    this.setState({ currentPage: 1 });
  };
  handleSort = column => {
    this.setState({ sortColumn: column });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleAddClick = () => {
    this.props.history.push("/add");
  };
  getPageData = () => {
    const { statusFilter, todos } = this.state;
    const filteredTodos =
      statusFilter === "All" || statusFilter === ""
        ? todos
        : todos.filter(t => t.status === statusFilter);

    const sortedTodos = _.orderBy(
      filteredTodos,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    const todosForCurrentPage = paginate(
      sortedTodos,
      this.state.currentPage,
      this.state.itemsPerPage
    );
    return {
      data: todosForCurrentPage,
      itemsCount: todos.length
    };
  };

  render() {
    const { itemsPerPage, currentPage, statusFilter } = this.state;
    const columns = [
      {
        path: "description",
        label: "Description"
      },
      {
        path: "assignedTo",
        label: "Assigned To"
      },
      {
        path: "dueDate",
        label: "Due Date"
      },
      {
        path: "status",
        label: "Status",
        content: todo => (
          <CompleteButton
            todo={todo}
            onComplete={() => this.handleComplete(todo)}
          />
        )
      }
    ];
    const { data, itemsCount } = this.getPageData();

    return (
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <TodosHeading
              outstanding={data.filter(t => t.status === "Incomplete").length}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary btn-sm  btn-outline-primary"
              onClick={() => this.handleAddClick()}
            >
              Add
            </button>
          </div>
          <div className="col-md-6">
            <StatusFilter
              statusFilter={statusFilter}
              onFilterChange={this.handleFilterChange}
            />
          </div>
        </div>

        <Table
          data={data}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
          columns={columns}
        />
        <Pagination
          itemsCount={itemsCount}
          itemsPerPage={itemsPerPage}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </main>
    );
  }
}

export default Todos;
