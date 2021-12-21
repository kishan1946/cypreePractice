package ekam.example.web;

import com.testvagrant.ekam.testBases.testng.WebTest;

import static com.testvagrant.ekam.commons.LayoutInitiator.*;

import org.testng.annotations.Test;

import static org.testng.Assert.*;

public class GoogleSearchTest extends WebTest {

    @Test(groups = "web")
    public void shouldDoGoogleSearch() {
        String title=Page(GoogleHomePage.class)
                .search("TestVagrant")
                .getTitle();
        assertEquals(title,"TestVagrant - Google Search");
    }
}