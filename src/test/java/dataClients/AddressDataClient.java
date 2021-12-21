package dataClients;

import com.testvagrant.ekam.commons.data.DataSetsClient;

public class AddressDataClient extends DataSetsClient {

    public Address getAddress() {
        return getValue("address", Address.class);
    }
}