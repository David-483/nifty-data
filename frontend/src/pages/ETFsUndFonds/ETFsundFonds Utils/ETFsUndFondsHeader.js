import '../ETFsundFonds Utils/ETFsUndFondsUtils.css'



function ETFsUndFondsHeader() {



  return (
    <>


    <div className="FondsDashboardHeaderContainer">

      <div className='ContainerLinks'>
      <div className='ContainerLinksOben'>
        146,30 USD
      </div>
      <div className='ContainerLinksUnten'>
        <div className='ContainerLinksUntenLinks'>
          <span> Benchmark: </span>
          <span>S&P500 </span>
        </div>
        <div className='ContainerLinksUntenRechts'>
        <span style={{marginLeft:"20px"}}> ISIN: </span>
          <span>IE38883888838 </span>
        </div>
      </div>
      </div>

      <div className='ContainerMitte'>
      <div className='ContainerMitteOben'>
        hallo
      </div>
      <div className='ContainerMitteUnten'>
        hallo
      </div>
      </div>


      <div className='ContainerRechts'>
      <div className='ContainerRechtsOben'>
      SPDR® S&P 500
      </div>
      <div className='ContainerRechtsUnten'>
      <div className='ContainerRechtsUntenLinks'>
          <span> Größe: </span>
          <span>38,5 Mrd. USD </span>
        </div>
        <div className='ContainerRechtsUntenRechts'>
        <span style={{marginLeft:"20px"}}> Auferlegung:</span>
          <span> 09.12.2009 </span>
        </div>
      </div>
      </div>

    </div>





</>

  );
}

export default ETFsUndFondsHeader;