package ekam.example.web;

import com.testvagrant.ekam.reports.annotations.WebStep;
import com.testvagrant.ekam.atoms.web.WebPage;
import org.openqa.selenium.By;

public class GoogleHomePage extends WebPage {
    private By searchBox = queryByName("q");
    private By searchButton = query("input[value='Google Search']");


    @WebStep(keyword = "When", description = "I hit search button")
    public GoogleHomePage search(String searchText) {
        textbox(searchBox).setText(searchText);
        element(searchButton).click();
        return this;
    }

    @WebStep(keyword = "Then", description = "I should return title")
    public String getTitle() {
        return driver.getTitle();
    }


}