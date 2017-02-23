
import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;



public class TestePaginaSoma {
    
    private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @BeforeClass(alwaysRun = true)
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "http://localhost:8080/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void test1() throws Exception {
    driver.get(baseUrl + "/olaWeb/");
    driver.findElement(By.name("p1")).clear();
    driver.findElement(By.name("p1")).sendKeys("");
    driver.findElement(By.name("p1")).clear();
    driver.findElement(By.name("p1")).sendKeys("23");
    driver.findElement(By.name("p2")).clear();
    driver.findElement(By.name("p2")).sendKeys("12");
    driver.findElement(By.name("calcular")).click();
    assertEquals(driver.findElement(By.cssSelector("h1")).getText(), "O resultado foi 35");
  }

  @Test
  public void test2() throws Exception {
    driver.get(baseUrl + "/olaWeb/");
    driver.findElement(By.name("p1")).clear();
    driver.findElement(By.name("p1")).sendKeys("");
    driver.findElement(By.name("p1")).clear();
    driver.findElement(By.name("p1")).sendKeys("13");
    driver.findElement(By.name("p2")).clear();
    driver.findElement(By.name("p2")).sendKeys("9");
    driver.findElement(By.name("calcular")).click();
    assertEquals(driver.findElement(By.cssSelector("h1")).getText(), "O resultado foi 23");
  }
  
  @AfterClass(alwaysRun = true)
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
