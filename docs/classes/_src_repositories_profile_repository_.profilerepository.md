**[@twolions/linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/profile.repository"](../modules/_src_repositories_profile_repository_.md) / ProfileRepository

# Class: ProfileRepository

## Hierarchy

* **ProfileRepository**

## Index

### Constructors

* [constructor](_src_repositories_profile_repository_.profilerepository.md#constructor)

### Methods

* [follow](_src_repositories_profile_repository_.profilerepository.md#follow)
* [getContactInfo](_src_repositories_profile_repository_.profilerepository.md#getcontactinfo)
* [getOwnProfile](_src_repositories_profile_repository_.profilerepository.md#getownprofile)
* [getProfile](_src_repositories_profile_repository_.profilerepository.md#getprofile)
* [unfollow](_src_repositories_profile_repository_.profilerepository.md#unfollow)

## Constructors

### constructor

\+ **new ProfileRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

*Defined in [src/repositories/profile.repository.ts:31](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

## Methods

### follow

▸ **follow**(`__namedParameters`: { profileId: string  }): Promise<void\>

*Defined in [src/repositories/profile.repository.ts:71](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L71)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { profileId: string  } |

**Returns:** Promise<void\>

___

### getContactInfo

▸ **getContactInfo**(`__namedParameters`: { publicIdentifier: string  }): Promise<[LinkedInProfileContactInfo](../interfaces/_src_entities_linkedin_profile_entity_.linkedinprofilecontactinfo.md)\>

*Defined in [src/repositories/profile.repository.ts:65](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { publicIdentifier: string  } |

**Returns:** Promise<[LinkedInProfileContactInfo](../interfaces/_src_entities_linkedin_profile_entity_.linkedinprofilecontactinfo.md)\>

___

### getOwnProfile

▸ **getOwnProfile**(): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

*Defined in [src/repositories/profile.repository.ts:53](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L53)*

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

___

### getProfile

▸ **getProfile**(`__namedParameters`: { publicIdentifier: string  }): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>

*Defined in [src/repositories/profile.repository.ts:37](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { publicIdentifier: string  } |

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>

___

### unfollow

▸ **unfollow**(`__namedParameters`: { profileId: string  }): Promise<void\>

*Defined in [src/repositories/profile.repository.ts:75](https://github.com/twolionsco/linkedin-private-api/blob/6efeb13/src/repositories/profile.repository.ts#L75)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { profileId: string  } |

**Returns:** Promise<void\>
