import React from "react";
import { connect } from "react-redux";
import { reloadHome } from "../../actions";

const dummyReminders = [
  "Videoconferencia Amaris mañana jueves 14/02 a las 12 por Skype",
  "ITALO MANDÓ LA PRUEBA? PONERME CON ESO",
  "Ir a la USB: recaudos Programa y Pénsum y entregar en DACE junto a comprobante de pago",
  "Buscarle precios solidarios de CPU a la mamá de la beba"
];
const dummyRemindersList = dummyReminders.map(reminder => (
  <div className="reminderContainer">{reminder}</div>
));

let Content = ({ reloadHome, isLoading }) => (
  <div>
    <div className="contentContainer">
      {dummyRemindersList}
      <div className="reminderContainer textMuted">Add a reminder</div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  reloadHome: () => {
    dispatch(reloadHome());
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.navbar.isLoading
  };
};

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
export default Content;
