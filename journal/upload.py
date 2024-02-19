import os

# Function to upload file to Neocities
def upload_to_neocities(filename):
    try:
        # Check if file exists on Neocities and delete it if it does
        os.system(f'neocities delete journal/{filename}')
        
        # Upload the new file
        upload_command = f'neocities upload -d journal {filename}'
        os.system(upload_command)
        print(f"Uploaded {filename} to Neocities")
    except Exception as e:
        print(f"Error uploading file to Neocities: {e}")

def main():
    # Name of the file to save the downloaded feed
    filename = 'index.html'
    # Upload RSS file to Neocities
    upload_to_neocities(filename)

if __name__ == "__main__":
    main()
