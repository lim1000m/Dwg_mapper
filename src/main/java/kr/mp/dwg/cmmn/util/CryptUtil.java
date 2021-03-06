package kr.mp.dwg.cmmn.util;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;


/**
 * Class Name 	: CrypoUtil.java
 * Description 	: 암복호화 관련 처리 유틸
 * Modification Information
 *
 *       수정일                         수정자             		    수정내용
 *    -----------      -----------     	---------------------
 *
 * 
 * @author 이진형
 * @since 2012.06.25
 * @version 1.0
 */
public class CryptUtil {
	private static byte[] iv={ 0x0a, 0x01, 0x02, 0x03, 0x04, 0x0b, 0x0c, 0x0d, 0x0a, 0x01, 0x02, 0x03, 0x04, 0x0b, 0x0c, 0x0d };
    private static IvParameterSpec ips = new IvParameterSpec(iv);
    
	public CryptUtil(){
		
	}
	
	/**
	 * AES 암호화 알고리즘으로 문자열 암호화(기본 생성자 사용시)
	 *
	 * @param key 암호화키
	 * @param message 암호화할 메시지
	 * @return 암호화된 메시지
	 * 
	 */
	public static String AESEncrypt(String key, String message) throws Exception{
		if(StringUtil.nullChk(key).equals("")){
			return message;
		}
		message = StringUtil.nullChk(message);
		  
		// use key coss2
        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");
        
        message = new sun.misc.BASE64Encoder().encode(message.getBytes());
        
        // Instantiate the cipher
        Cipher cipher = null;
        byte[] encrypted = null;
		cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, skeySpec, ips);
        encrypted = cipher.doFinal(message.getBytes());
        
        
		return  byteArrayToHex(encrypted);
	}
	
	/**
	 * AES 암호화 알고리즘으로 문자열 암호화
	 *
	 * @param key 암호화키
	 * @param message 암호화할 메시지 배열
	 * @return 암호화된 메시지
	 * 
	 */
	public static String[] AESEncrypt(String key, String[] message) throws Exception{
		if(StringUtil.nullChk(key).equals("") || message == null || message.length < 1){
			return message;
		}
		// use key coss2
        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");

        // Instantiate the cipher
        Cipher cipher = null;
        @SuppressWarnings("unused")
		byte[] encrypted = null;
		cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, skeySpec, ips);
        String[] temp = new String[message.length];
        for(int i=0; i<message.length; i++){
        	message[i] = StringUtil.nullChk(message[i]);
        	message[i] = new sun.misc.BASE64Encoder().encode(message[i].getBytes());
        	temp[i] = byteArrayToHex(cipher.doFinal(message[i].getBytes()));
        }
		return  temp;
	}
	
	/**
	 * AES 암호화 알고리즘으로 문자열 복호화(기본 생성자 사용시)
	 *
	 * @param key 암호화키
	 * @param message 복호화할 메시지
	 * @return 복호화된 메시지
	 * 
	 */
	public static String AESDecrypt(String key, String message) throws Exception{
		if(key.equals("") || message == null || message.equals("")){
			return message;
		}
		//암호화된 메시지 출력
		
		// use key coss2
        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");

        // Instantiate the cipher
        Cipher cipher = null;
        byte[] decrypted = null;
		cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, skeySpec, ips);
		decrypted = cipher.doFinal(hexToByteArray(message));

		message = new String(decrypted);
		
        message = new String( new sun.misc.BASE64Decoder().decodeBuffer(message));
        
		int i=0;
		for(; i<message.length(); i++){
			if((byte)message.charAt(i) == -3){ //C에서 보낸 널 문자 제저
				break;
			}
		}
		message = message.substring(0, i);
		
		//복호화된 메시지 출력
		
		return message;
	}
	
	/**
	 * AES 암호화 알고리즘으로 문자열 복호화(기본 생성자 사용시)
	 *
	 * @param key 암호화키
	 * @param message 복호화할 메시지 배열
	 * @return 복호화된 메시지
	 * 
	 */
	public static String[] AESDecrypt(String key, String[] message) throws Exception{
		if(key.equals("") || message == null || message.length <1){
			return message;
		}
		// use key coss2
        SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");
        
        // Instantiate the cipher
        Cipher cipher = null;
        @SuppressWarnings("unused")
		byte[] decrypted = null;
		cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, skeySpec, ips);
		String[] temp = new String[message.length];
				
		for(int i=0; i<message.length; i++){
			//암호화된 메시지 출력
			message[i] = new String(cipher.doFinal(hexToByteArray(message[i])));
			temp[i] = new String( new sun.misc.BASE64Decoder().decodeBuffer(message[i]));
			int j=0;
			for(; j<temp[i].length(); j++){
				if((byte)(temp[i]).charAt(j) == -3){
					break;
				}
			}
			temp[i] = temp[i].substring(0, j);
			//암호화된 메시지 출력
		}
		return temp;
	}
	
	public static KeyPair getRsaKeyPair(int keysize) throws Exception{
		KeyPairGenerator generator;
		KeyPair keyPair = null;
		generator = KeyPairGenerator.getInstance("RSA");
		generator.initialize(keysize);
		keyPair = generator.genKeyPair();
		return keyPair;
	}
	
	public static String RsaDecrypt(PrivateKey privateKey, String securedValue) throws Exception{
		Cipher cipher = Cipher.getInstance("RSA");
        byte[] encryptedBytes = StringUtil.hexStrToByteArray(securedValue);
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        String decryptedValue = new String(decryptedBytes, "utf-8"); // 문자 인코딩 주의.
        return decryptedValue;
	}
	
	/**
     * hex to byte[] : 16진수 문자열을 바이트 배열로 변환한다.
     *
     * @param hex    hex string
     * @return
     */
    public static byte[] hexToByteArray(String hex) {
        if (hex == null || hex.length() == 0) {
            return null;
        }

        byte[] ba = new byte[hex.length() / 2];
        for (int i = 0; i < ba.length; i++) {
            ba[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
        }
        return ba;
    }

    /**
     * byte[] to hex : unsigned byte(바이트) 배열을 16진수 문자열로 바꾼다.
     *
     * @param ba        byte[]                
     * 
     * @return
     */
    public static String byteArrayToHex(byte[] ba) {
        if (ba == null || ba.length == 0) {
            return null;
        }

        StringBuffer sb = new StringBuffer(ba.length * 2);
        String hexNumber;
        for (int x = 0; x < ba.length; x++) {
            hexNumber = "0" + Integer.toHexString(0xff & ba[x]);
     
            sb.append(hexNumber.substring(hexNumber.length() - 2));
        }
        return sb.toString();
    }
    
}
