package ekam.example.web;

import com.google.inject.Inject;
import com.testvagrant.ekam.commons.data.DataSetsClient;
import com.testvagrant.ekam.testBases.testng.WebTest;
import dataClients.Address;
import dataClients.AddressDataClient;
import org.testng.annotations.Test;
import static com.testvagrant.ekam.commons.LayoutInitiator.*;
import static org.testng.Assert.*;

@Test(groups = "web")
public class WebExampleTest extends WebTest {
    @Inject
    private DataSetsClient dataSetsClient;
    @Inject
    private AddressDataClient addressDataClient;
    @Test(groups = "SmokeTest")
    public void shouldReadPropertyFile() {
        String property1=dataSetsClient.getValue("property1",String.class);
        String property2=dataSetsClient.getValue("property2",String.class);
        System.out.println(property1);
        System.out.println(property2);
    }

    @Test(groups = "SmokeTest")
    public void shouldGetAddress() {
        Address address=addressDataClient.getAddress();
        System.out.println(address.getFirstName());
        System.out.println(address.getCity());
    }
}
