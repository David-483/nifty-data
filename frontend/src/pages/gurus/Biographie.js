function Biographie ({data}){
      return (
        <div className="guruBio">
        <div className="guruBioHeader"> 
            <table className="guruBioTable">
                <tbody>
                <tr className="guruBioRow">
            <td className="guruBioHeaderText">Geburtsdatum</td>
            <td className="guruBioHeaderText">Geburtsort</td>
            <td className="guruBioHeaderText">Universität</td>
            <td className="guruBioHeaderText">Last Update</td>
        </tr>
        <tr className="guruBioRow2">
            <td className="guruBioHeaderText">{data.gurusInfos[0].birthDate}</td>
            <td className="guruBioHeaderText">{data.gurusInfos[0].birthPlace}</td>
            <td className="guruBioHeaderText">{data.gurusInfos[0].guruSchool}</td>
            <td className="guruBioHeaderText">{data.gurusInfos[0].lastUpdate}</td>
        </tr>
        </tbody>
        </table>
        <div className="guruBioText"> 
        {data.gurusInfos[0].guruDescription}
        </div>
        </div>
    </div>
);
}

export default Biographie;
