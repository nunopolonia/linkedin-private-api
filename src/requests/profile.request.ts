import { LinkedInRequest } from '../core/linkedin-request';
import { GetOwnProfileResponse } from '../responses/own-profile.response.get';
import { GetProfileResponse } from '../responses/profile.response.get';
import { GetProfileContactInfoResponse } from '../responses/profile.contact-info.response.get';

export class ProfileRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getProfile({ publicIdentifier }: { publicIdentifier: string }): Promise<GetProfileResponse> {
    const queryParams = {
      q: 'memberIdentity',
      memberIdentity: publicIdentifier,
      decorationId: 'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary-100',
    };

    return this.request.get<GetProfileResponse>('identity/dash/profiles', {
      params: queryParams,
    });
  }

  getOwnProfile(): Promise<GetOwnProfileResponse> {
    return this.request.get<GetOwnProfileResponse>('me');
  }

  getContactInfo({ publicIdentifier }: { publicIdentifier: string }): Promise<GetProfileContactInfoResponse> {
    return this.request.get<GetProfileContactInfoResponse>(`identity/profiles/${publicIdentifier}/profileContactInfo`);
  }

  follow({ profileId }: { profileId: string }): void {
    const requestPayload = {
      patch: {"$set": { following: true }}
    }
    
    this.request.post(
      `feed/dash/followingStates/urn:li:fsd_followingState:urn:li:fsd_profile:${profileId}`,
      requestPayload,
    );
  }

  unfollow({ profileId }: { profileId: string }): void {
    const requestPayload = {
      patch: {"$set": { following: false }}
    }
    
    this.request.post(
      `feed/dash/followingStates/urn:li:fsd_followingState:urn:li:fsd_profile:${profileId}`,
      requestPayload,
    );
  }
}
