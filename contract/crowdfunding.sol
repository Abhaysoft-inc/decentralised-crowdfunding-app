// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract CrowdFunding {
    mapping(string => uint) balance; // saves balances using names

    struct Campaign {
        string campaignName;
        uint goalAmount;
        uint currentBalance;
        address campaignOwner;
    }

    Campaign[] public campaigns;

    function createCampaign(
        string memory _campaignName,
        uint _goalAmount
    ) public {
        Campaign memory newCampaign = Campaign({
            campaignName: _campaignName,
            goalAmount: _goalAmount,
            currentBalance: 0,
            campaignOwner: msg.sender
        });

        campaigns.push(newCampaign);
    }

    function donate(uint _campaignIndex) public payable {
        campaigns[_campaignIndex].currentBalance += msg.value;
    }

    function claimCrowdFund(uint _campaignIndex) public {
        require(
            campaigns[_campaignIndex].currentBalance > 0,
            "Not enough balace to withdraw"
        );
        require(
            campaigns[_campaignIndex].currentBalance ==
                campaigns[_campaignIndex].goalAmount,
            "Goal Amount not fulfilled"
        );
        campaigns[_campaignIndex].currentBalance = 0;
        (bool success, ) = campaigns[_campaignIndex].campaignOwner.call{
            value: campaigns[_campaignIndex].currentBalance
        }("");
        require(success, "Payment Failed");
    }
}
