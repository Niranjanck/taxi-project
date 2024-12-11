import { useState } from "react";
import OutstationForm from "./OutstationForm";
import AirportTransfersForm from "./AirportTransferForm";


interface TabProps {
  key: string,
  title: string,
  component: JSX.Element
}
export default function BookingTab() {
  const [activeTab, setActiveTab] = useState("airport-transfer");
  const tabs: TabProps[] = [
    {
      key: "airport-transfer",
      title: "Airport Transfers",
      component: <AirportTransfersForm />
    },
    {
    key: 'tour-packages',
    title: "Tour Packages",
    component: <OutstationForm />
  }
  ];

  return (
    <div className=' tp-p-10 tp-flex tp-justify-center'>
      <div className=" tp-mt-10 tp-w-4/5">
        <div className="tp-relative tp-rounded-t-3xl tp-border-0 tp-bg-primary tp-flex tp-justify-center tp-overflow-hidden">
          <div className="tp-w-full tp-border-0 ">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`tp-flex-1 tp-py-4 tp-px-[60px] tp-text-center tp-w-fit  tp-font-medium  tp-transition ${activeTab === tab.key
                    ? "tp-bg-white tp-text-primary"
                    : "tp-bg-primary tp-text-white"
                  }  tp-cursor-pointer tp-outline-none`}
                style={{
                  zIndex: activeTab === tab.key ? 10 : 0,
                  boxShadow: activeTab === tab.key ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
                }}
              >

                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="tp-bg-white tp-p-6 tp-rounded-b-3xl tp-shadow-lg">
          {
            tabs.filter((item: TabProps) => item.key === activeTab).map((tab: TabProps) => (
              tab.component
            ))
          }
        </div>
      </div>
    </div>
  )
}