graph TD
    %% Demand Side
    Advertiser[Advertiser<br/>Brands & Companies]
    Agency[Agency<br/>Marketing & Media Agencies]
    DSP[DSP<br/>Demand-Side Platform]
    MediaBuying[Media Buying Platform<br/>Campaign Management]
    
    %% Supply Side
    Publisher[Publisher<br/>Websites & Apps]
    SSP[SSP<br/>Supply-Side Platform]
    
    %% Marketplace
    AdExchange[Ad Exchange<br/>Marketplace]
    
    %% Data & Analytics
    DMP[DMP<br/>Data Management Platform]
    DataPartners[Data Partners<br/>3rd Party Data Providers]
    Attribution[Attribution Partners<br/>Multi-Touch Attribution]
    Measurement[Measurement Partners<br/>Analytics & Verification]
    
    %% User
    User[End User<br/>Website/App Visitor]
    
    %% Primary Relationships - Demand Side
    Advertiser -->|Hires & Budget| Agency
    Advertiser -->|Direct Budget| DSP
    Agency -->|Campaign Strategy| MediaBuying
    MediaBuying -->|Bid Requests| DSP
    DSP -->|Buys Ad Inventory| AdExchange
    
    %% Primary Relationships - Supply Side
    Publisher -->|Sells Inventory| SSP
    SSP -->|Offers Inventory| AdExchange
    
    %% Bidding Process
    AdExchange <-->|Real-Time Bidding| DSP
    AdExchange <-->|Inventory Availability| SSP
    
    %% Data Flow
    DMP -->|Audience Data| DSP
    DMP -->|Audience Segments| SSP
    DataPartners -->|3rd Party Data| DMP
    DataPartners -->|Direct Data Feed| DSP
    
    Publisher -->|1st Party Data| DMP
    Advertiser -->|1st Party Data| DMP
    
    %% Measurement & Attribution
    DSP -->|Campaign Data| Attribution
    Publisher -->|Conversion Data| Attribution
    Attribution -->|Performance Insights| Advertiser
    Attribution -->|ROI Analysis| Agency
    
    Measurement -->|Viewability & Fraud Detection| DSP
    Measurement -->|Quality Metrics| Publisher
    Measurement -->|Performance Reports| Advertiser
    Measurement -->|Campaign Analytics| Agency
    
    %% Ad Delivery
    SSP -->|Serves Ads| Publisher
    Publisher -->|Displays Ads| User
    User -->|Interactions & Conversions| Publisher
    User -->|Behavioral Data| DMP
    
    %% Feedback Loops
    Publisher -->|Performance Data| SSP
    DSP -->|Optimization Data| MediaBuying
    
    %% Styling
    classDef demand fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    classDef supply fill:#fff4e1,stroke:#ff9900,stroke-width:2px
    classDef marketplace fill:#f0e1ff,stroke:#9900cc,stroke-width:2px
    classDef data fill:#e1ffe1,stroke:#00cc66,stroke-width:2px
    classDef user fill:#ffe1e1,stroke:#cc0000,stroke-width:2px
    
    class Advertiser,Agency,DSP,MediaBuying demand
    class Publisher,SSP supply
    class AdExchange marketplace
    class DMP,DataPartners,Attribution,Measurement data
    class User user