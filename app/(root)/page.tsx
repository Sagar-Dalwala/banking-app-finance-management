import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {

  const loggedIn = {firstName: "Sagar", lastName: "Dalwala" , email: "sagar@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "User"}
            subtext="Access and manage your accounts and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={999.99}

          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 99999.99},{currentBalance: 10265.99}]}
      />
    </section>
  );
};

export default Home;
