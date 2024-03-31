import axios from "axios";

class Sdk {
  constructor() {
    console.log("Split initialized");
  }

  create() {
    console.log("create");
  }

  open() {
    console.log("open");
  }

  getVersion() {
    console.log("v1.0.0");
  }

  init(apiKey) {
    console.log("init");
    // axios.get('http://localhost:8000/auth/sdk', {
    //   headers: {
    //     'api-key': apiKey,
    //   },
    // })
    //   .then(response => {
    //     console.log('auth request successful', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error in referral request', error);
    //   });
  }

  async referral(apiKey, userAdd, providerAdd) {
    try {
      const response = await axios.post(
        `http://localhost:8000/referral?userAddress=${userAdd}&referralProviderAddress=${providerAdd}`,
        null,
        {
          headers: {
            "api-key": apiKey,
          },
        },
      );
      return response.data.updated;
    } catch (error) {
      console.error("Error in referral request", error);
      throw new Error("Referral request failed");
    }
  }
}

export default Sdk;
