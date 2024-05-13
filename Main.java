import java.util.Scanner;

public class Main {

    private static final String USERNAME = "admin";
    private static final String PASSWORD = "password";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Login System");

        while (true) {
            System.out.print("Enter username: ");
            String username = scanner.nextLine();

            System.out.print("Enter password: ");
            String password = scanner.nextLine();

            if (login(username, password)) {
                System.out.println("Login successful!");
                break;
            } else {
                System.out.println("Invalid username or password. Please try again.");
            }
        }
        scanner.close();
    }

    private static boolean login(String username, String password) {
        return username.equals(USERNAME) && password.equals(PASSWORD);
    }
}
