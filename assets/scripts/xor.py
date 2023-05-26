import argparse


def xor(file_path, key):
    with open(file_path, 'rb') as f:
        data = f.read()
    key = key.encode('utf-8')
    l_key = len(key)
    secret = bytearray(data)
    for i in range(len(data)):
        secret[i] ^= key[i % l_key]
    with open(file_path, 'wb') as f:
        f.write(secret)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('file_path', type=str, help='file path')
    parser.add_argument('key', type=str, help='key')
    args = parser.parse_args()
    xor(args.file_path, args.key)
    print('done')
