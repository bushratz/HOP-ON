import random

class HopOnApp:
    def __init__(self, university_domain):
        self.university_domain = university_domain
        self.users = {}  # {user_id: {email, user_type, verified}}
        self.ride_requests = []  # [{rider_id, destination}]
        self.drivers = {}  # {driver_id: {name, car_details, availability}}

    def register_user(self, user_id, email, user_type):
        if email.split('@')[-1] != self.university_domain:
            print("⚠️ Invalid university email. Registration failed.")
            return
        if user_id in self.users:
            print(f"⚠️ User ID {user_id} is already registered.")
            return

        otp = random.randint(1000, 9999)
        print(f"📧 OTP for email {email}: {otp}")  # Simulated OTP sent to email
        user_otp = int(input("🔑 Enter the OTP sent to your email: "))
        if user_otp == otp:
            self.users[user_id] = {"email": email, "type": user_type, "verified": True}
            if user_type == "driver":
                self.drivers[user_id] = {"name": "", "car_details": "", "availability": True}
            print(f"🎉 Welcome to **Hop On**, {user_id}! Registration successful.")
        else:
            print("❌ Invalid OTP. Registration failed.")

    def request_ride(self, rider_id, destination):
        if rider_id not in self.users or not self.users[rider_id]["verified"]:
            print("⚠️ User is not registered or verified.")
            return

        if self.users[rider_id]["type"] != "rider":
            print("⚠️ Only riders can request rides.")
            return

        self.ride_requests.append({"rider_id": rider_id, "destination": destination})
        print(f"🚗 Ride requested! We'll match you with a driver heading to {destination} soon.")
        self.match_ride_with_drivers(destination)

    def match_ride_with_drivers(self, destination):
        print(f"\n🔍 Searching for drivers heading towards: {destination}")
        available_drivers = [driver_id for driver_id, details in self.drivers.items() if details["availability"]]
        if not available_drivers:
            print("🚫 No drivers available at the moment. Please try again later.")
            return

        print(f"✅ Drivers available: {', '.join(available_drivers)}")
        driver_id = input("🛞 Enter your driver ID to accept the ride (or skip): ")
        if driver_id in self.drivers and driver_id in available_drivers:
            print(f"🎉 Driver {driver_id} has accepted the ride request!")
        else:
            print("⚠️ No driver has accepted the ride request.")

    def view_rides(self):
        if not self.ride_requests:
            print("🚫 No active ride requests.")
        else:
            print("\n📋 Active Ride Requests:")
            for request in self.ride_requests:
                rider_name = self.users[request["rider_id"]]["email"].split('@')[0]
                print(f"  - Rider {rider_name} wants a ride to {request['destination']}")

    def main_menu(self):
        while True:
            print("\n🚀 --- Welcome to Hop On! --- 🚀")
            print("1. Register")
            print("2. Request Ride")
            print("3. View Rides")
            print("4. Exit")
            choice = input("👉 Enter your choice: ")

            if choice == "1":
                user_id = input("🎓 Enter your university ID: ")
                email = input(f"📧 Enter your university email (must end with {self.university_domain}): ")
                user_type = input("🛞 Enter type (driver/rider): ").lower()
                self.register_user(user_id, email, user_type)
            elif choice == "2":
                rider_id = input("🎓 Enter your university ID: ")
                destination = input("📍 Enter your destination: ")
                self.request_ride(rider_id, destination)
            elif choice == "3":
                self.view_rides()
            elif choice == "4":
                print("👋 Thanks for using Hop On! Stay safe and happy carpooling.")
                break
            else:
                print("⚠️ Invalid choice. Please try again.")


# Run the app
if __name__ == "__main__":
    university_domain = "university.edu"  # Replace with your university's domain
    hop_on = HopOnApp(university_domain)
    hop_on.main_menu()


